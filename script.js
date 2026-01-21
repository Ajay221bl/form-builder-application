// creating the left and right side divs
function renderFormBuilder(){
    const leftSide = document.createElement("div");
    leftSide.setAttribute("id", "leftSide");
    const rightSide = document.createElement("div");
    rightSide.setAttribute("id", "rightSide");
    const sidesContainer = document.createElement("div");
    sidesContainer.setAttribute("id", "sidesContainer");

    // adding stuff in left div
    const leftHeading = document.createElement("h2");
    leftHeading.innerHTML = "Form Builder";

        // adding the field type section
    const fieldTypeSectionDiv = document.createElement("div");
    const formTag1 = document.createElement("form");
    const fieldTypeLabel= document.createElement("label");
    fieldTypeLabel.setAttribute("for", "field-types");
    fieldTypeLabel.setAttribute("style", "display: block");
    fieldTypeLabel.setAttribute("style", "font-weight: bold")
    fieldTypeLabel.innerHTML = "Select Field Type";



    const selectorHeading1 = document.createElement("select");
    selectorHeading1.setAttribute("name", "field type")
    selectorHeading1.setAttribute("id", "selectFieldType")
    selectorHeading1.setAttribute("style", "min-width: 100%; min-height: 13%; border-radius: 5px; border-width: 1px; background-color: rgb(240, 235, 235)")

    const option1 = document.createElement("option");
    option1.setAttribute("value", "text input");
    option1.innerHTML = "Text Input";

    const option2 = document.createElement("option");
    option2.setAttribute("value", "checkbox");
    option2.innerHTML = "Checkbox";

    const option3 = document.createElement("option")
    option3.setAttribute("value", "radio");
    option3.innerHTML = "Radio button"

        // adding the field label section
    const fieldNameSectionDiv = document.createElement("div");
    const formTag2  = document.createElement("form")
    const fieldNameLabel = document.createElement("label");
    fieldNameLabel.setAttribute("style", "display: block")
    fieldNameLabel.innerHTML = "Field Label";
    fieldNameLabel.setAttribute("style", "font-weight: bold")
    const fieldNameInput = document.createElement("input")
    fieldNameInput.setAttribute("type", "text")
    fieldNameInput.setAttribute("id", "fieldNameInput")
    fieldNameInput.setAttribute("style", "min-width: 100%; min-height: 13%; border-radius: 5px; border-width: 1px")

        // creating the button
    const addButton = document.createElement("Button");
    addButton.innerHTML = "Add Field";
    addButton.setAttribute("id", "addButton")
    addButton.setAttribute("onclick", "renderPreviewSection()")
    addButton.setAttribute("style", "min-width: 100%; min-height: 13%; background-color: rgb(23, 48, 175); color: white; border-radius: 5px; border-width: 1px")
    //addButton.setAttribute("onclick", `${render()}`)

    // appending the left side stuff to the left side div
        //appending the options to the select tag
    selectorHeading1.appendChild(option1);
    selectorHeading1.appendChild(option2);
    selectorHeading1.appendChild(option3);


        //appending the label and select tag  of field type to form tag
    formTag1.appendChild(fieldTypeLabel)
    formTag1.appendChild(selectorHeading1)

        //appending the form tag to the fieldTypeSectionDiv
    fieldTypeSectionDiv.appendChild(formTag1)

        // appending the label and input tag of field label to form tag
    formTag2.appendChild(fieldNameLabel);
    formTag2.appendChild(fieldNameInput);

        //appending the form tag to the fieldNameSectionDiv
    fieldNameSectionDiv.appendChild(formTag2);
        // appending the remaining components to left side

    leftSide.appendChild(leftHeading);
    leftSide.appendChild(fieldTypeSectionDiv);
    leftSide.appendChild(fieldNameSectionDiv);
    leftSide.appendChild(addButton);

    // right side heading
    rightHeading = document.createElement("h2");
    rightHeading.innerHTML = "Form Preview"

    //creating a container div inside the right side
    const formPreviewContentContainerDiv = document.createElement("div");
    formPreviewContentContainerDiv.setAttribute("id", "formPreviewContentContainerDiv")

    rightSide.appendChild(rightHeading);
    rightSide.appendChild(formPreviewContentContainerDiv)

    // finally appending the left and right sides
    sidesContainer.appendChild(leftSide);
    sidesContainer.appendChild(rightSide);
    const body = document.querySelector("body");
    body.appendChild(sidesContainer);

}

function renderPreviewSection(){
    // extracting the value of input and selecet tag from the left portion
    const fieldTypeSelectValue = document.querySelector("#selectFieldType").value;
    const fieldNameInputValue = document.querySelector("#fieldNameInput").value;

    // creating a div container to hold the form content
    const formPreviewContentContainer = document.querySelector("#formPreviewContentContainerDiv")

    const formTag = document.createElement("form");

    


    if(fieldTypeSelectValue=="text input"){
        const labelForQ = document.createElement("label");
        labelForQ.innerHTML = fieldNameInputValue;
        labelForQ.setAttribute("style", "display: block;")
        const newInputSection = document.createElement("input");
        newInputSection.setAttribute("placeholder", "Enter your answer");
        newInputSection.setAttribute("type", "text");

        // appending the label and input tag to the form tag
            formTag.appendChild(labelForQ);
            formTag.appendChild(newInputSection);

        

    }else if(fieldTypeSelectValue=="checkbox"){
        const labelForCheckbox = document.createElement("label");
        const newCheckbox = document.createElement("input");
        newCheckbox.setAttribute("type", "checkbox")
        const labelText = document.createTextNode(fieldNameInputValue)
        labelForCheckbox.appendChild(newCheckbox);
        labelForCheckbox.appendChild(labelText);
        formTag.appendChild(labelForCheckbox);

    }else if(fieldTypeSelectValue=="radio"){
        const labelForRadioButton = document.createElement("label");
        const newRadioButton = document.createElement("input");
        newRadioButton.setAttribute("type", "radio");
        const labelText = document.createTextNode(fieldNameInputValue);
        labelForRadioButton.appendChild(newRadioButton);
        labelForRadioButton.appendChild(labelText);
        formTag.appendChild(labelForRadioButton);

    }
    formPreviewContentContainer.appendChild(formTag);
    rightSide.appendChild(formPreviewContentContainer);
}

renderFormBuilder()























