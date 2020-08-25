import React from 'react'
import { imageUrlFor } from '../lib/image-url'

function TeamMember (props) {
    return (
        <div>
          {props.title && <h2> {props.title}</h2>}
          <ul>
              {props.nodes && 
              props.nodes.map(node =>(
                  <li key={node.id}>
                   {/* <img 
                    src={imageUrlFor(props.mainImage)
                    .width(200)
                    .height(200)
                    .url()}
                    alt={props.mainImage.alt}
                    /> */}
                    <p>{node.name}</p>
                  </li>
              ))
              }
          </ul>
        </div>
    )
}

export default TeamMember
