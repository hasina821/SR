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
        $oldcandidature = DB::table('candidatures')->where('refoffre',$request->refoffre)->get();
        $cvpath = Storage::putFile('public/candidatures', $request->file('cv'));
        $cvpath = str_replace('public', 'storage', $cvpath);
        $lmpath = Storage::putFile('public/candidatures', $request->file('lm'));
        $lmpath = str_replace('public', 'storage', $lmpath);
        $newcandidature=candidature::create([
            'nom'=>$request->nom,
            'prenom'=>$request->prenom,
            'email'=>$request->email,
            'es'=>$request->es,
            'state'=>$request->state,
            'refoffre'=>$request->refoffre,
            'cv'=>$cvpath,
            'lm'=>$lmpath
        ]);

        return $oldcandidature;

        /*
        return response()->json([
            "status"=>"Sucess",
            "newcandidature"=>$newcandidature,
            "candidature"=>array($oldcandidature)
        ],Response::HTTP_CREATED);
        */
    }

    public function update(Request $request,int $id)
    {
        $candidature = candidature::find($id);

        if(!$candidature){
            return response()->json([
                "status"=>"Not found",
                "message"=>"Resource not found"
            ]);
        }
        $candidature->update($request->all());
        return response()->json([
            "status"=>"Sucess",
            "candidature"=>$candidature
        ],Response::HTTP_ACCEPTED);
    }
    public function delete($id)
    {
        candidature::destroy($id);
        return response()->json([
            "status"=>"Sucess",
            "Message"=>"candidature removed successfully"
        ]);

    }
}
