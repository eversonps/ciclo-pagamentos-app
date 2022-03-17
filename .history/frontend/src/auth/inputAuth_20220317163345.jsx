11.4.6. Criar componente inputAuth
Listagem 22 - Criar componente inputAuth.jsx
my-money-app/frontend/src/common/form/inputAuth.jsx
import React from 'react'
import If from '../operator/if'
export default props => (
<If test={!props.hide}>
<div className="form-group has-feedback">
<input {...props.input}
className='form-control'
placeholder={props.placeholder}
readOnly={props.readOnly}
type={props.type} />
<span className={`glyphicon glyphicon-${props.icon}
form-control-feedback`}></span>
</div>
</If>
)