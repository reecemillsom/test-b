import {ChangeEvent, FC, useEffect, useState} from 'react';
import { Input } from 'antd';
import {ResultItem} from "./ResultItem";
import {PokemonData} from "../types/PokemonData";
import styles from "../styles/Home.module.css";

const { Search } = Input;

interface Props {}

export const PokeSearch: FC<Props> = ({}) => {
    const [search, setSearch] = useState<string>('');
    const [result, setResult] = useState<PokemonData | null>(null);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setResult(null);
       const fetchPokemon = async () => {
           try {
               const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);


               if (!response.ok) {
                   const responseText = await response.text();

                   // NOTE: Not found
                   if (response.status === 404) {
                       setError(responseText);
                   }

                   return;
               }

               const { name, height, sprites } = await response.json();

               setResult({ name, height, imageUrl: sprites?.front_default });
           } catch (error: any) {
               setError('Unexpected Error Occurred');
           }
       };

       fetchPokemon();
    }, [search]);

    const clearHandler = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
        if (currentTarget.value === '') {
            setSearch('');
        }
    }

    return (
        <div className={styles.searchContainer}>
            <Search
                className={styles.search}
                placeholder="Search for your faviourite Pokemon"
                onSearch={(value: string) => setSearch(value)}
                onChange={clearHandler}
                allowClear={true}
            />

            {result && (
                <ResultItem pokemon={result} />
            )}
        </div>
    )
}