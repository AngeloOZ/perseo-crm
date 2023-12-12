<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestFormController extends Controller
{
    //

    public function insert(Request $request)
    {
        $request->validate(
            [
                'fullName' => 'required|min:10',
            ],
            [
                'fullName.required' => 'Nombre es requridos',
                'fullName.min' => 'debe tener 10 caracteres',
            ],
        );

        $name = $request->input('fullName');           

        return back()->with('success', 'Data Added Successfully');
    }
}
