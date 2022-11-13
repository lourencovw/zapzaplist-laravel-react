<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class ZapList extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'text'];

    protected static function boot()
    {
        parent::boot();
        static::creating(function($zapList)
        {            
            $zapList->link = $zapList->generateSlug($zapList->title);
        });
    }
    private function generateSlug($title)
    {
        if (static::whereLink($slug = Str::slug($title))->exists()) {
            return $slug.'-'.Str::uuid()->toString();
        }
        return $slug;
    } 
}