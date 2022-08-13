import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    // props.alert part is evaluated first. IF it is null, then the entire expression is false, and hence, the remaining expression is not calculated, resulting in an error to not be declared
    props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
        </div>
    </div>
  )
}

export default Alert