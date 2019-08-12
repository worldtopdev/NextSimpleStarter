import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Badge from '@material-ui/core/Badge'

const useStyles = makeStyles(() => ({
	fork: {
		position: 'absolute',
		right: 30,
		top: 30
	}
}))

const Fork = ({ stars }) => {
	const classes = useStyles()
	return (
		<div className={classes.fork}>
			<Badge badgeContent={stars || 0} max={999} color="primary">
				<Fab
					variant="extended"
					href="https://github.com/ooade/NextSimpleStarter"
					target="_blank"
				>
					Fork me
				</Fab>
			</Badge>
		</div>
	)
}

export default Fork
