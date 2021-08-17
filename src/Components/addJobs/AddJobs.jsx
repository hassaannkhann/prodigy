import React, { Component } from 'react'

export default class AddJobs extends Component {

    async postData () {

        try {

            let result = await fetch('https://webhook.site/04b2fd27-45f7-4576-96b5-21090038a4a8', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: 'myuser@gmail.com',
                    name: 'Test',
                    lastName: 'User',
                    age: 12

                })
            });

            console.log(result)

        } catch (e) {
            console.log(e);
        }

    }

    render() {
        return (
            <div className="addJobs">
                <button onClick={ () => this.postData() }>Press me to post some data!</button>
            </div>
        )
    }
}
