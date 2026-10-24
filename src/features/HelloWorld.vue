<script setup>
import { Scaffold, AppBar, Container } from '@/features/shared/components'
</script>

<template>
  <Scaffold>
    <template #appBar>
      <AppBar 
        title="Page Title" 
        :fixed="true" 
      />
    </template>

    <Container 
      :padding="20" 
      style="margin-top: 60px"
    >
      <h1>Page Title</h1>
    </Container>
  </Scaffold>
</template>
