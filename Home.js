import React from "react";
import withMainLayout from "../layout/withMainLayout";
import Card from "../components/Card";
import Table from "../components/Table";

function Home() {
    return (
        <>
            <div className="row">
                <div className="col">
                    <Card 
                        title={"Card 1"} 
                        description={"This is card 1"} 
                        bgColor={"bg-success"} />
                </div>
                <div className="col">
                    <Card 
                        title={"Card 2"} 
                        description={"This is card 2"} 
                        bgColor={"bg-danger"} />
                </div>
                <div className="col">
                    <Card 
                        title={"Card 3"} 
                        description={"This is card 3"} 
                        bgColor={"bg-warning"} />
                </div>
                <div className="col">
                    <Card 
                        title={"Card 4"} 
                        description={"This is card 4"} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <Table 
                        columns={["Id", "Name", "Age", "Options"]} 
                        values={[ [1, "Gosho", 30, <button>1</button>], [2, "Pesho", 27, <button>1</button>] ]}
                    />
                </div>
            </div>
        </>
    );
}

export default withMainLayout(Home);