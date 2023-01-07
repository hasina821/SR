<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Response;

class UserAuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', [
            'except' => ['login', 'register', 'addProfilePicture']
        ]);
    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if(!Hash::check($request->password, $user->password)) {

            return response()->json([
                'status' => 'Failure',
                'message' => 'Email ou mot de passe erroné'
            ], Response::HTTP_UNAUTHORIZED);
        }

        return response()->json([
            'status' => 'Success',
            'user' => $user,
            'token' => $user->createToken($user->email)->plainTextToken
        ], Response::HTTP_OK);
    }

    public function register(Request $request)
    {
        $user = User::create([
            'name' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return response()->json([
            'status' => 'Success',
            'user' => $user,
            'token' => $user->createToken($user->email)->plainTextToken
        ], Response::HTTP_CREATED);
    }

    public function addProfilePicture(Request $request, int $id)
    {
        $file = $request->file('profile_picture');
        $path = $file->storeAs('public/uploads/profile_pictures', time().'_'.$file->getClientOriginalName());
        $user = User::find($id);
        $user->profile_picture = str_replace('public', 'storage', $path);
        $user->save();

        return response()->json([
            'status' => 'success',
            'user' => $user
        ]);
    }

    public function logout()
    {
        Auth::logout();

        return response()->json([
            'status' => 'success',
            'message' => 'successfully logged out'
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ], 201);
    }
}
