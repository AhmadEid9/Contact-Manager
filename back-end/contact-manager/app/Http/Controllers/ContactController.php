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
            'number_type' => 'required|string',
            'longitude' => 'required',
            'lattitude' => 'required',
        ]);

        $contact = new Contact; 
        $contact->first_name = $request->first_name;
        $contact->last_name = $request->last_name;
        $contact->number = $request->number;
        $contact->number_type = $request->number_type;
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
