/*!
* Start Bootstrap - Modern Business v5.0.5 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var name = $(location).attr('pathname');
name = name.replace('/', '').replace('.html', '');
if (name !== "#") {
    $( '#topheader .navbar-nav' ).find( 'a.active' ).removeClass( 'active' );
    var id = '#' + name;
    $(`${id}`).addClass('active')
}
