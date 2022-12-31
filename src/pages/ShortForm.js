import React, { useState } from "react";

function ShortForm() {
  const [email, setEmail] = useState("");
  const submit = (event) => {
    event.preventDefault();
    console.log(email);
  };
  return (
    <div>
      <form class="row g-3" onSubmit={submit}>
        <div class="col-auto">
          <label for="staticEmail2" class="visually-hidden">
            Email
          </label>
          <input
            type="text"
            class="form-control-plaintext"
            id="staticEmail2"
            onBlur={(e) => setEmail(e.target.value)}
          />
        </div>

        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">
            Confirm identity
          </button>
        </div>
      </form>
    </div>
  );
}

export default ShortForm;
