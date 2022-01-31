import Head from 'next/head'
import { useDispatch } from "react-redux";
import { getAllUsers } from '../redux/userSlice'
import {useEffect, useState} from "react";

import {Flex, Box, Text, HStack} from "@chakra-ui/react"

export default function Home() {

  const [users, setUsers] = useState({})

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsers())
        .then((res) => {
          if(res.payload.status === "success") setUsers(res.payload.data)
    })
  }, [dispatch])

  return (
      <Box h="100vh" w="100vw" bg="gray.900">
          <HStack p={5}>
              <Text color="white">
                  Watches
              </Text>
          </HStack>
      </Box>
  )
}
