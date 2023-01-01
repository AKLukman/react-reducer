import React, { useReducer, useState } from "react";
import { initialState, reducer } from "../state/formReducer";

function ShortForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <form class="row g-3 needs-validation" novalidate onSubmit={submit}>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">
            First name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            name="firstName"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">
            Last name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            name="lastName"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label">
            Username
          </label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              class="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              name="userName"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom03" class="form-label">
            City
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            name="city"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
          <div class="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">
            State
          </label>
          <select
            class="form-select"
            id="validationCustom04"
            name="state"
            onChange={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          >
            <option selected disabled value="">
              Choose...
            </option>
            <option>Mango</option>
            <option>Orange</option>
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom05" class="form-label">
            Zip
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom05"
            name="zip"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
          <div class="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="invalidCheck"
              name="checkBox"
              onClick={(e) =>
                dispatch({
                  type: "TOGGLE",
                })
              }
            />
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="col-12">
          <button
            class="btn btn-primary"
            type="submit"
            disabled={!state.checkBox}
          >
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}

export default ShortForm;
