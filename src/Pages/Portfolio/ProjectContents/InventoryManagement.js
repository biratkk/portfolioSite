import React from 'react'
import Title from './ReusableComponents/Title'
import {ContentWithLink} from './ReusableComponents/Content'
import FileLink from './Resources/Files/InventoryManagementApp.zip'
export default function EmployeeOS(){
    let content = 
    `
    As the name suggests, this app is a gateway to manage a store's inventory (or rather, the quantity of items).
    While there are many apps out there which met similar criteria it didn't fulfil all of what I would've liked within an application such as this.
    \n\n
    This was my first ever project and so it was inevitable that I encountered a number of errors.
    These errors were mostly basic errors to do with the logic of the UI I was coding. However, with
    hard work and perseverence, by learning and solidifying my understanding of Java, I solved these
    erorrs. 
    \n\n
    Here, I learned a very important lesson in programming: 
    debugging. I am continously learning new and better ways to debug, which improves this skill in 
    itself as well as immensely allowing me to learn how very different styles languages work. 
    \n\n
    To try this out, extract the downloaded file and run the "App.jar" file.
    `
    return (
        <div className = "project-page">
            <Title title = "Inventory Management App"/>
            <ContentWithLink content = {content}
             link = {"d"}
            download = {true}
            downloadTitle = "IMApp"/>
        </div>
    )
}