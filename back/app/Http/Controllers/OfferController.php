<?php

namespace App\Http\Controllers;

use App\Models\Offre;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class OfferController extends Controller
{
    public function getAll()
    {
        return response()->json([
            'status' => 'Success',
            'offers' => DB::table('offres')->get()
        ], Response::HTTP_ACCEPTED);
    }

    public function getOne(int $id)
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

    public function save(Request $request)
    {
        $path = Storage::putFile('public/offres', $request->file('pdc'));
        $path = str_replace('public', 'storage', $path);

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
}
