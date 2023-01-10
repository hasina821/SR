<?php
namespace App\Http\Controllers;

use App\Models\Offre;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Models\candidature;

class OfferController extends Controller
{
    public function getAll()
    {
        return response()->json([
            'status' => 'Success',
            'offers' => DB::table('offres')->get()
        ], Response::HTTP_ACCEPTED);
    }
    public function getOne (int $id)
    {
        $offer = DB::table('offres')->where('id', $id)->first();
        if(!$offer) {
            return response()->json([
                'status' => 'Not found',
                'Message' => 'Ressource Not found'
            ], Response::HTTP_NOT_FOUND);
        }
        return response()->json([
            'status' => 'Success',
            'offre' => $offer
        ], Response::HTTP_ACCEPTED);
    }

    public function save (Request $request)
    {
        $path = Storage::putFile('public/offres', $request->file('pdc'));
        $path = str_replace('public', 'storage', $path);
        $offer = Offre::find($request->ref);
        if($offer){
            return response()->json([
                "status"=>"Not allowed",
                "Message"=>"Un offre avec ce reference existe déjà"
            ],Response::HTTP_CONFLICT);
        }
        $offer = Offre::create([
            'nom' => $request->nom,
            'ref' => $request->ref,
            'pdc' => $path,
            'urgent' => $request->urgent || false,
            'domaine' => $request->domaine,
            'commentaire' => $request->commentaire,
            'nbrePersonne' => $request->nbrePersonne
        ]);
        return response()->json([
            'status' => 'Success',
            'offre' => $offer
        ], Response::HTTP_CREATED);
    }
    public function update (Request $request,int $id)
    {
        $offer = Offre::find($id);
        if (!$offer) {
            return response()->json([
                "status"=>"Not found",
                "message"=>"Resource not found"
            ],Response::HTTP_NOT_FOUND);
        }

        $offer->update($request->all());
        return response()->json([
            "status"=>"Sucess",
            "offer"=>$offer
        ],Response::HTTP_ACCEPTED);
    }
    public function destroy ($id)
    {
        Offre::destroy($id);
        return response()->json([
            "Status"=>"Success",
            "Message"=>"Deleted successfully"
        ],Response::HTTP_ACCEPTED);
    }
    public function getoffercandidature (Request $request,String $ref)
    {
        $offre = DB::table('offres')->where('ref', $ref)->first();
        if(!$offre){
            return response()->json([
                "status"=>"Not found",
                "Message"=>"Resource not found"
            ],Response::HTTP_NOT_FOUND);
        }

        $candidature=candidature::where('refoffre',$ref)->get()->toArray();
        return response()->json([
            "status"=>"Sucess",
            "offre"=> $offre,
            "candidature"=> $candidature
        ],Response::HTTP_ACCEPTED);

    }

}
