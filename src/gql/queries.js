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

export const EDIT_HOUSE = gql`
mutation EditHouse($editHouseInput:EditHouseInput!){
  editHouse(editHouseInput:$editHouseInput){
    id name owner {id username}
  }
} 
`

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

export const INVITE_PLAYER_TO_HOUSE = gql`
mutation InvitePlayerToHouse($invitePlayerToHouseInput:InvitePlayerToHouseInput!){
  invitePlayerToHouse(invitePlayerToHouseInput:$nvitePlayerToHouseInput){
    id username invite {house{id} status}
  }
}
`
