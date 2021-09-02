import { AccessTime, AccountBox, HelpOutline, Search } from '@material-ui/icons'
import { white } from 'material-ui/styles/colors'
import React from 'react'
import "./Header.css"

export default function Header(){
    return (
        <div className="chatterbox__header">
            <div className="chatterbox__header__main">
                <AccessTime style={{color:"rgb(225, 225, 251)"}} ></AccessTime>
                <div className="chatterbox__header__item search-container">
                    <input name="search" placeholder="Search" />
                    <Search style={{color:"rgb(225, 225, 251)"}} ></Search>
                </div>
                <HelpOutline style={{color:"rgb(225, 225, 251)"}} ></HelpOutline>
            </div>
            <div className="chatterbox__header__item">
                <AccountBox style={{color:"#5af8d7"}} ></AccountBox>
            </div>
        </div>
    )
}