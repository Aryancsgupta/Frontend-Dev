"use strict";

class FormBuilder {
    constructor(fields) {
        this.fields = fields;  // array of field objects
    }

    // Create form dynamically
    renderForm(containerId) {
        const container = document.getElementById(containerId);

        let html = "";

        this.fields.forEach((field, index) => {
            html += `
                <div>
                    <label>${field.label}</label><br>
                    <input 
                        type="${field.type}" 
                        id="field_${index}" 
                        placeholder="${field.label}"
                    >
                    <br><br>
                </div>
            `;
        });

        container.innerHTML = html;
    }

    // Get form data as an object
    getFormData() {
        const data = {};

        this.fields.forEach((field, index) => {
            const input = document.getElementById(`field_${index}`);
            data[field.label] = input.value;
        });

        return data;
    }
}

// ------------ Example Usage ------------

// Array of field configs
const fieldConfig = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
];

// Create form builder instance
const myForm = new FormBuilder(fieldConfig);

// Render form
myForm.renderForm("formArea");

// Submit button event
document.getElementById("submitBtn").addEventListener("click", function () {
    const result = myForm.getFormData();
    document.getElementById("output").textContent = JSON.stringify(result, null, 2);
});
