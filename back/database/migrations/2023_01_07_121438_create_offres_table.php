<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offres', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('ref', 25);
            $table->string('pdc', 200);
            $table->boolean('urgent')->default(false);
            $table->enum('domaine', ['RH', 'Finance', 'BPO', 'Dev et Reseaux', 'Relation Client']);
            $table->text('commentaire');
            $table->string('nbrePersonne');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offres');
    }
};
