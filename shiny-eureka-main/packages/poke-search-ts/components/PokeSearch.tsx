import {ChangeEvent, FC, useEffect, useState} from 'react';
import {Input, message} from 'antd';
import {ResultItem} from "./ResultItem";
import {PokemonData} from "../types/PokemonData";
import styles from "../styles/Home.module.css";

const { Search } = Input;

const UNEXPECTED_ERROR_MESSAGE = 'Unexpected Error Occurred';

export const PokeSearch: FC = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [search, setSearch] = useState<string>('');
    const [result, setResult] = useState<PokemonData | null>(null);
    const [error, setError] = useState<string>('');

    // TODO don't need a useEffect here, can achieve the same by just having a handler function.
    useEffect(() => {
       setResult(null);
       const fetchPokemon = async () => {
           try {
               if (!search) {
                   return;
               }

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

               setResult({ name, height: height * 10, imageUrl: sprites?.front_default });
           } catch (error: any) {
               setError(UNEXPECTED_ERROR_MESSAGE);
           }
       };

       fetchPokemon();
    }, [search]);

    // TODO I would also show this in a custom hook, just to clean up the view like above. useErrorVisible
    useEffect(() => {
        if (!error) {
            return;
        }

        messageApi.error(error);
        setError('');
    }, [error])

    const clearHandler = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
        if (currentTarget.value === '') {
            setSearch('');
        }
    }

    return (
        <>
            {contextHolder}
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
        </>
    )
}