<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function createContact(Request $request){
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'number' => 'required|string|max:255',
            'number_type' => 'required|string|min:6',
            'image' => 'required|image',
            'contact_type' => 'required',
            'longitude' => 'required',
            'lattitue' => 'lattitude',

        ]);

        $contact = new Contact; 
        $contact->first_name = $request->first_name;
        $contact->last_name = $request->last_name;
        $contact->number = $request->number;
        $contact->number_type = $request->number_type;
        $contact->image = $request->image;
        $contact->contact_type = $request->contact_type;
        $contact->longitude = $request->longitude;
        $contact->lattitude = $request->lattitude;
        $contact->is_favorite = $request->is_favorite ? true : false;

        $contact->save();

        return response()->json([
            'status' => 'Contact Added Successfully',
            'data' => $contact
        ]);

    }
}
