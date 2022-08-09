import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = zod.object({
  query: zod.string()
})

type SearchFormInput = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })
  
  async function handleSearchTransaction(data: SearchFormInput) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data);
    
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input type="text" placeholder="Busque por transações" {...register('query')}/>
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
