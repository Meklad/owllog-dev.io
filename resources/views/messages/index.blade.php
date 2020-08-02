@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-3">
            <h3>Online Users</h3><hr>
            <ul class="list-group" id="online-users" style="color:#3490dc;">
                
            </ul>
        </div>
        <div class="col-md-9 d-flex flex-column" style="height: 80vh;">
            <div class="h-100 bg-white mb-4 p-5" id="chat" style="overflow-y: scroll;">
                
            </div>
            <form action="#">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Message..." aria-label="Recipient's username" aria-describedby="basic-addon2" data-url="{{ route('messages.store') }}">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                            Send
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection