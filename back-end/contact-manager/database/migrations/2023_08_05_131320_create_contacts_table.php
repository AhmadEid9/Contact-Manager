<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contact_types', function (Blueprint $table) {
            $table->id();
            $table->string('type');
        });

        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('contact_type');// Family - Work - Service
            
            $table->string('first_name');
            $table->string('last_name');
            $table->string('image');
            
            
            $table->string('number');
            $table->string('number_type'); //Phone - Work - Home
            
            $table->boolean('is_favorite');

            $table->decimal('longitude', 10, 7);
            $table->decimal('lattitude', 10, 7);

            $table->timestamps();
        });

        Schema::table('contacts', function (Blueprint $table){
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::table('contacts', function (Blueprint $table){
            $table->foreign('contact_type')->references('id')->on('contact_types');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
