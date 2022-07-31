import React from "./gallery";

class Test extends React.Component {
constructor(props) {
 super(props);

 this.state = {
    fields: {},
    errors: {},
 };
}

handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
    formIsValid =false;
    errors["name"] = "Cannot be empty";
    }

 if (typeof fields["name"] !=="undefined") {
    if (!fields["name"].match(/^[a-zA-Z]+$/)) {
    formIsValid = false;
    errors["name"] = "Only letters";
    }
 }   

 //Email
 if (!fields["email"]) {
    formIsValid = false;
    errors["email"] ="Cannot be empty";
 }

 if (typeof fields["email"] !== "undefined") {
    let lastAtPos = fields["email"].lastIndexOf("@");
    let lastDotPos = fields["email"].lastIndexOf(".");

    if (
        !(
            lastAtPos < lastDotPos &&
            lastAtPos > 0 &&
            fields["email"].indexOf ("@@") == -1 &&
            lastDotPos > 2 &&
            fields["email"].length -lastDotPos > 2
        )
    ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
    }
 }
    this.setState({errors: errors });
    return formIsValid;
}
    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            alert("Form submitted");
        } else {
            alert("Form has errors.");
        }
    }
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }
    render() {
        return (
            <div>
                <form
                name="HelpingArea"
                className="form-shared"
                onSubmit={this.formSubmit.bind(this)}
                >
                <div className="col-lg-12">
                <fieldset>
                    <input
                    ref="form-group"
                    type="text"
                    size="30"
                    placeholder=" Full name"
                    onChange={this.handleChange.bind(this, "Full name")}
                    value={this.state.fields["Full name"]}
                    />
                    <span style={{  color: "red"  }}>{this.state.errors["Full name"]}</span>
                    <br />
                    <input 
                    refs="email"
                    type="text"
                    size="30"
                    placeholder="Email address"
                    onChange={this.handleChange.bind(this, "email")}
                    value={this.state.fields["email"]}
                    />
                    <span style={{  color: "red"}}>{this.state.errors["email"]}</span>
                    <br />
                    <input
                    refs="location"
                    type="text"
                    size="30"
                    placeholder="Location"
                    onChange={this.handleChange.bind(this, "location")}
                    value={this.state.fields["location"]}
                    />
                    <br />
                    <input
                    refs="message"
                    type="textarea"
                    size="30"
                    placeholder="Leave a comment"
                    onChange={this.handleChange.bind(this, "leave a comment")}
                    value={this.state.fields["leave a comment"]}
                    />
                    <br />
                </fieldset>
            </div>
            </form>
            </div>
        )
    }
}
React.render(<Test />, document.getElementById("container"));