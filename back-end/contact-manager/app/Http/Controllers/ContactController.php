<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function createContact(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'number' => 'required|string|max:255',
            'longitude' => 'required',
            'lattitude' => 'required',
        ]);

        $contact = new Contact; 
        $contact->name = $request->name;
        $contact->number = $request->number;
        $contact->longitude = $request->longitude;
        $contact->lattitude = $request->lattitude;

        $contact->save();

        return response()->json([
            'status' => 'Contact Added Successfully',
            'data' => $contact
        ]);
        
    }
    public function getContacts(){
            $contacts = Contact::all();
            return response()->json($contacts);
    }
}
