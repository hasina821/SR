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
        Schema::create('candidatures', function (Blueprint $table) {
            $table->id();
            $table->string('nom',50);
            $table->string('prenom',15);
            $table->string('email',50);
            $table->string('es', 50);
            $table->string('state');
            $table->integer('id_colonne')->default(1);
            $table->string('refoffre',25);
            $table->string('cv', 200);
            $table->string('lm', 200);
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
        Schema::dropIfExists('candidatures');
    }
};
