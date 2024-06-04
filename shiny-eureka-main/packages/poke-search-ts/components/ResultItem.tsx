import { FC } from 'react';
import styles from "../styles/Home.module.css";
import {PokemonData} from "../types/PokemonData";

interface Props {
    pokemon: PokemonData;
}

// TODO have the item always have space for the image so when it populated it doesn't move the input, and set a image size, width & height.
export const ResultItem: FC<Props> = ({ pokemon }) => {
    const { name, height, imageUrl } = pokemon;
    const formattedHeight = `${height}cm`;

    return (
        <div className={styles.resultItemContainer}>
            <img width={100} height={100} src={imageUrl} alt={name}/>

            <div className={styles.resultItemContent}>
                <div>Name: {name}</div>
                <div>Height: {formattedHeight}</div>
            </div>
        </div>
    );
}