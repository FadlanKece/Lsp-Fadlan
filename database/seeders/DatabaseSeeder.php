<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'Fadlan',
            'email' => 'fadlan@example.com',
            'password' => Hash::make('password'),
            'phone' => '0812345678',
            'address' => 'jalan parkit no 3',
            'roles'::create(['roles' => 'owner']),
        ]);
    }
}