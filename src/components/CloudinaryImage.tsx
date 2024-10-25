// src/components/CloudinaryImage.tsx
import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { AdvancedImage } from '@cloudinary/react';
import Images, { ImageName } from '../assets';

interface CloudinaryImageProps {
    name: ImageName;
    width?: number; // Tamaño deseado en píxeles
    height?: number;
}

const CloudinaryImage: React.FC<CloudinaryImageProps> = ({ name, width, height }) => {
    const cld = new Cloudinary({ cloud: { cloudName: 'degbnkdoh' } });

    const publicId = Images[name];

    const img = cld
        .image(publicId)
        .format("auto") // Formato automático
        .quality("auto") // Calidad fija para optimización
        .resize(auto().width(width || 560).height(height || 560)); // Redimensionar a 300x300 o según necesites

    return (
        <div>
            <AdvancedImage cldImg={img} loading="lazy" />
        </div>
    );
};

export default CloudinaryImage;