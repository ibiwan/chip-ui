import { gql } from "@apollo/client"

export const GET_HOUSES = gql`
query Houses {
  getAllHouses { id name }
}`

export const CREATE_HOUSE = gql`
mutation CreateHouse($createHouseInput: CreateHouseInput!) {
  createHouse(createHouseInput: $createHouseInput) {
    id name owner { id username }
  }
}`

export const DELETE_HOUSE = gql`
mutation DeleteHouse($houseId: Int!) {
  deleteHouse(houseId: $houseId)
}`

export const GET_PLAYERS = gql`
query Players {
  getAllPlayers { id username }
}`

export const GET_CURRENT_USER = gql`
query CurrentUser {
  getCurrentPlayer{
    id 
    username 
    isAdmin
  }
}`
