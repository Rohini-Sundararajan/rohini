import React from 'react';
import backg from '../../../src/assets/ini.jpg'
import mainlogo from './../../assets/mainlogoroh.jpg'
import './style.css';


export default function Front1() {
    return (
        <div className="mainpage">
            <div className ="back">
                <img src ={backg} />
            </div>
           <h3 class="main-head1">PRO WORLD</h3>
    <div class="container">
        <button class="main-btn1">Look It!</button>
    </div>
    <p class="main-p1">You are browsing for the best resource for<b class="main-b"> Online Education</b></p>
    <img class="logo" src={mainlogo} alt="main "/>
    <div class="menu">
        <ul class="menu-ul">
            <div class="menu-li">

                <li><a class="menu-a" href="./course.html">Courses</a></li>
                <li><a class="menu-a" href="./contact.html">Contact us</a></li>
                <li><a class="menu-a" href="./about.html">About</a></li>
                <li><a class="menu-a" href="#">My Enrollments</a></li>
            </div>
        </ul>
    </div>
     <div class="social_media">
        <ul class="main-soc">
            <li class="msoc-li"><a class="msoc-a" href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
            <li class="msoc-li"><a class="msoc-a" href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
            <li class="msoc-li"><a class="msoc-a" href="#"><i class="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
            <li class="msoc-li"><a class="msoc-a" href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
            <li class="msoc-li"><a class="msoc-a" href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
    </div> 

    <div class="search_box">
        <input class="search-txt " type="text" name="" id="" placeholder="Type to search"/>
        <a class="search_btn" href="#">
            <i class="fas fa-search"></i>
        </a>
    </div>
    <div class="button1">
        <a href="./loginrohini.html"><button class="mbtn1">Login</button></a>
    </div> 
        </div>
    )
}

