import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrices = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>

            <ResultsList results={filterResultsByPrices('$')} title="Cost Effective"/>
            <ResultsList results={filterResultsByPrices('$$')} title="Bit Pricer"/>
            <ResultsList results={filterResultsByPrices('$$$')} title="Big Spender"/>

        </View>
    )
}

const syles = StyleSheet.create({})

export default SearchScreen