import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import { Paper, Tab} from '@material-ui/core'
import withWidth from 'material-ui/utils/withWidth'

export default withWidth()(
  ({ muscles, category,onSelect,width }) => {
  const index = category?muscles.findIndex(group => group === category)+1:0

  const onIndexSelect = (e,index) =>
    onSelect(index === 0 ? '' : muscles[index - 1])
    
    return (
     <Paper>
        <Tabs
          value={index}
          onChange = {onIndexSelect}
          indicatorColor="primary"
          textColor="primary"
          centered={width !== 'xs'}
          scrollable={width === 'xs'}
          variant="scrollable"
          scrollButtons="on"
        >
        <Tab label="All"/>
        { muscles.map(group => 
          <Tab label={group}/>
        )}
        </Tabs>
      </Paper>
    )
})
