import React from 'react';
import {Fragment} from 'react';
import { Segment, Checkbox, Form} from "semantic-ui-react";

function EntryForm({
    description, value, isExpense, setDescription, setValue, setIsExpense
}){
    return(
        <Fragment> 
        <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New Shiny thing"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox toggle label="is expense" checked={isExpense} onChange={()=> setIsExpense((oldState) => !oldState) }/>
      </Segment>
      </Fragment>
    )
}

export default EntryForm