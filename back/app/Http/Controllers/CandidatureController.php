<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use App\Models\candidature;

class CandidatureController extends Controller
{
    public function getAll()
    {
        return response()->json([
            "status"=>"Success",
            "candidatures"=>DB::table('candidatures')->get()
        ],Response::HTTP_ACCEPTED);
    }
    public function getOne(int $id)
    {
        $candidature = DB::table('candidatures')->where('id',$id)->first();

        if(!$candidature){
            return response()->json([
                "status"=>"Not found",
                "message"=>"Resource not found"
            ],Response::HTTP_NOT_FOUND);
        }
        return response()->json([
            "status"=>"Sucess",
            "Candidature"=>$candidature
        ],Response::HTTP_ACCEPTED);
    }
    public function save(Request $request)
    {
        $cvpath = Storage::putFile('public/candidatures', $request->file('cvpath'));
        $cvpath = str_replace('public', 'storage', $cvpath);

        $lmpath = Storage::putFile('public/candidatures', $request->file('lmpath'));
        $lmpath = str_replace('public', 'storage', $lmpath);

        $candidature=candidature::create([
            'nom'=>$request->nom,
            'prenom'=>$request->prenom,
            'email'=>$request->email,
            'cv'=>$cvpath,
            'lm'=>$lmpath,
            'ecole'=>$request->ecole,

        ]);

        return response()->json([
            "status"=>"Sucess",
            "candidature"=>$candidature
        ],Response::HTTP_CREATED);
    }

    public function changeState(Request $request,int $id)
    {


    }
    public function delete()
    {

    }
}
