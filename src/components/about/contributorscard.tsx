import * as React from "react";
import Image from "next/image";
import { IAuthor } from "@/interfaces/iauthor";


export function ContributorsCard(props:IAuthor) {
  return (
    <div className="contributors-list-item">
      <div className="contributors-list-item-pic">
        <Image
          src={props.pic}
          width={200}
          height={200}
          alt="hero-pic"
        />
      </div>
      <div className="contributors-list-item-name">
        <h3>{props.name}</h3>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  );
}
