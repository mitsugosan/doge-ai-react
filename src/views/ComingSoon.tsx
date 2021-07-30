import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text } from 'glassswap-uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const ComingSoon = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <StyledNotFound>
        <Heading size="xxl">Coming Soon</Heading>
        <Text mb="16px">{TranslateString(1122, 'We will be right back!')}</Text>
        <Button as="a" href="/" scale="sm">
          {TranslateString(1124, 'Back Home')}
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default ComingSoon
