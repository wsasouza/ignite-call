import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { CalendarBlank, Clock } from 'phosphor-react'
import { ConfirmForm, FormActions, FormHeader } from './styles'

export function ConfirmStep() {
  function handleConfirmScheduling() {}

  return (
    <ConfirmForm as="form" onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          16 de março de 2023
        </Text>
        <Text>
          <Clock />
          18:00
        </Text>
      </FormHeader>

      <label htmlFor="name">
        <Text size="sm">Nome completo</Text>
        <TextInput id="name" placeholder="Seu nome" />
      </label>

      <label htmlFor="email">
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput id="email" type="email" placeholder="Seu e-mail" />
      </label>

      <label htmlFor="comments">
        <Text size="sm">Observações</Text>
        <TextArea id="comments" />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit">Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}
