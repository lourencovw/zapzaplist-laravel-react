<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreZapListRequest;
use App\Http\Requests\UpdateZapListRequest;
use App\Models\ZapList;
use Inertia\Inertia;

class ZapListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Welcome');
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreZapListRequest $request)
    {    
        $zapList = ZapList::create($request->input());
        
        return redirect($zapList->link.'/edit');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ZapList  $zapList
     * @return \Illuminate\Http\Response
     */
    public function show(ZapList $zapList, $id)
    {
        return ZapList::select(['title', 'text'])->where('link', $id)->first();
    }

    /**
     * Display the login view.
     *
     * @return \Inertia\Response
     */
    public function edit(ZapList $zapList, $link )
    {
        $zapList = ZapList::select(['title', 'text'])->where('link', $link)->firstOrFail();

        $parameters = [
            'link' => $link,
            'url' => env('APP_URL').'/'.$link.'/edit',
            'title' => $zapList->title,
            'text' => $zapList->text
        ];
        return Inertia::render('Edit', $parameters);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateZapListRequest  $request
     * @param  \App\Models\ZapList  $zapList
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateZapListRequest $request, ZapList $zapList, $id)
    {  
        $zapList->where('link', $id)->update(['text' => $request->input('text')]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ZapList  $zapList
     * @return \Illuminate\Http\Response
     */
    public function destroy(ZapList $zapList)
    {
        //
    }
}