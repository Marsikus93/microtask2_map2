import React from 'react';

type CarsProps = {
    cars: carType[]
}
type carType = {
    manufacturer: string,
    model: string
}
export const Cars = (props: CarsProps) => {
    return (
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>manufacture</th>
                    <th>model</th>
                </tr>

                {props.cars.map((ElementFromTopCars: carType, index: number) => {
                        return (
                            <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{ElementFromTopCars.manufacturer}</td>
                                    <td>{ElementFromTopCars.model}</td>
                                </tr>
                            </>
                        )
                    }
                )}
            </table>
        </div>
    )
}