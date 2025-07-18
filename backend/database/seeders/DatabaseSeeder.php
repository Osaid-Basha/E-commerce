<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            RoleSeeder::class,
            CategorySeeder::class,
            UserSeeder::class,
            ProductSeeder::class,
            OfferSeeder::class,
            OrderSeeder::class,
            NotificationSeeder::class,
            ContactSeeder::class,
            OrderItemSeeder::class,
        ]);
    }
}
