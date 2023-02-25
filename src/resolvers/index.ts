import { Resolver, Query } from 'type-graphql';

@Resolver()
export class BaseResolver {
  @Query(() => String )
  hello() {
    return 'hello world'
  }
}