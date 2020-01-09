import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrices = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrices('$')} 
                    title="Cost Effective"
                    navigation={navigation}
                    />
                <ResultsList   
                    results={filterResultsByPrices('$$')} 
                    title="Bit Pricer"
                    navigation={navigation}
                    />
                <ResultsList 
                    results={filterResultsByPrices('$$$')} 
                    title="Big Spender"
                    navigation={navigation}
                    />
            </ScrollView>
        </>
    )
}

const syles = StyleSheet.create({

})

export default SearchScreen