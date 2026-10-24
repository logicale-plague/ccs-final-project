<script setup>
import { Scaffold, Container, Column, Text, OutlinedButton, Card, Row } from '@/features/shared/components'
import coverImage from '/images/CCS-Cover.jpg'
</script>

<template>
    <Scaffold>
        <Container
            :image="coverImage"
            width="100%"
            overlay="rgba(0, 0, 0, 0.7)"
            height="900px"
            fit="cover"
        >
            <Column 
                width="900px"
                height="100%"
                :padding="{ x: 192 }"
                :spacing="32"
                main-axis-alignment="center"
            >
                <Text 
                    value="CCS Warriors Homepage"
                    :size="48"
                    weight="bold"
                    color="#ffffff"
                />
                <Column :spacing="16">
                    <Text
                        value="Home of the MT Warriors. The CCS core practices that build bridges between gaps."
                        :size="24"
                        color="#8b949e"
                    />
                    <OutlinedButton
                        label="Your FUTURE begins HERE"
                        border-color="#ffb024"
                        :font-size="16"
                        font-color="#ffb024"
                    />
                </Column>
            </Column>
        </Container>
        <Container
            width="100%"
            :padding="{ x: 192, y: 32 }"
        >
            <Row
                spacing="between"
                width="100%"
            >
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </Row>
        </Container>
    </Scaffold>
</template>