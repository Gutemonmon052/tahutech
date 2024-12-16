import * as React from 'react';
import Image from 'next/image';
import { ISosmed } from '@/interfaces/isosmed';
export function SosmedCard(props: ISosmed) {
  return (
       <div className="contactus-sosmed-item">
              <Image
                src={`/assets/images/${props.link}`}
                width={30}
                height={30}
                alt={`${props.id}`}
              />
              <span>{props.sosmed_name}</span>
            </div>
  );
}
