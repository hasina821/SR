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
    public function getallwithref(Request $request,string $ref)
    {
        $candidatures = DB::table('candidatures')->where('refoffre',$ref)->get();

        if(!$candidatures){
            return response()->json([
                "status"=>"Not found",
                "message"=>"Resource not found"
            ],Response::HTTP_NOT_FOUND);
        }
        return response()->json([
            "status"=>"Sucess",
            "Candidature"=>$candidatures
        ],Response::HTTP_ACCEPTED);
    }
    public function save(Request $request)
    {
        $oldcandidature = candidature::where('refoffre',$request->refoffre)->get()->toArray();
        $cvpath = Storage::putFile('public/candidatures', $request->file('cv'));
        $cvpath = str_replace('public', 'storage', $cvpath);
        $lmpath = Storage::putFile('public/candidatures', $request->file('lm'));
        $lmpath = str_replace('public', 'storage', $lmpath);
        foreach ($oldcandidature as $old) {
            if($old['nom']==$request->nom &&  $old['prenom']==$request->prenom && $old['email']==$request->email)
            {
              return response()->json([
                 "status"=>"Not allowed",
                 "Message"=>"Vous avez déjà postulé à ce poste"
              ]);
            }
         }
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
        return response()->json([
            "status"=>"Sucess",
            "Candidature"=>$newcandidature
        ],Response::HTTP_CREATED);

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

    public function incrementcolonne_id(Request $request,int $id)
    {
        $candidature = candidature::find($id);
        $candidature->id_colonne++;
        $candidature->save();
        return response()->json([
            'status' => 'success',
            'candidature' => $candidature
        ]);
    }

    public function decrementcolonne_id(int $id)
    {
        $candidature = candidature::find($id);
        $candidature->id_colonne--;
        $candidature->save();
        return response()->json([
            'status' => 'success',
            'candidature' => $candidature
        ]);
    }
    public function stateupdatecandidature(Request $request,int $id)
    {
        $candidature = candidature::find($id);
        $candidature->id_colonne = $request->new_id_colonne;
        return response()->json([
            "Status"=>"Sucess",
            "candidature"=> $candidature
        ],Response::HTTP_ACCEPTED);
    }
}
