# Poincaré Duality

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** AT-05  
**Level:** Advanced    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For a closed connected oriented smooth $n$-manifold $M$, prove cap product with its integral fundamental class gives an isomorphism $H^k(M;\mathbb Z)\to H_{n-k}(M;\mathbb Z)$ for $0\le k\le n$.

**Foundations and permitted imports:**

Use a finite smooth triangulationK of the closed oriented manifold, compatible orientations on top simplices, and its barycentric subdivision. Import simplicial/cellular-to-singular homology and cohomology comparison and subdivision invariance. In a triangulated manifold the closed star of each simplex is contractible, and barycentric dual blocks form a cell decomposition: the link is a sphere and coning its subdivided chains gives the complementary-dimensional ball. Use the chain definition of cap product with identity ∂([M] capα)=(−1)^(k+1)[M] capδα for a closed fundamental cycle and a degree-k cochain, with a fixed matching cap convention. No duality is imported; the dual differential and identification are established below.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Fundamental cycle and dual blocks
N2 [v1] Compute the dual-chain differential
  N1 -- E1: The fundamental cycle and a basis pairing between simplicial cochains and dual cellular chains. --> N2
N3 [v1] Identify the induced map with cap product
  N1 -- E1: The fundamental cycle and a basis pairing between simplicial cochains and dual cellular chains. --> N3
  N2 -- E2: A degree-reversing chain identification inducing H^k(K;Z)≅H_(n−k)(dualK;Z). --> N3
N4 [v1] Transfer to singular groups and close
  N2 -- E2: A degree-reversing chain identification inducing H^k(K;Z)≅H_(n−k)(dualK;Z). --> N4
  N3 -- E3: The dual-cell isomorphism is the cap-product map [M] cap(−). --> N4
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | The fundamental cycle and a basis pairing between simplicial cochains and dual cellular chains. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T1-3 | N1/v1, E1 | The fundamental cycle and a basis pairing between simplicial cochains and dual cellular chains. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | A degree-reversing chain identification inducing H^k(K;Z)≅H_(n−k)(dualK;Z). | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |
| T2-4 | N2/v1, E2 | A degree-reversing chain identification inducing H^k(K;Z)≅H_(n−k)(dualK;Z). | N4.1 | N4 inputs below; same theorem objects and assumptions | Proof §4.N2 |
| T3-4 | N3/v1, E3 | The dual-cell isomorphism is the cap-product map [M] cap(−). | N4.1 | N4 inputs below; same theorem objects and assumptions | Proof §4.N3 |

## 3. Node roles and faculty activities

### N1/v1 — Fundamental cycle and dual blocks

**Object, role, and local target:** Pair an oriented simplex with its transverse dual block. The required export is: The fundamental cycle and a basis pairing between simplicial cochains and dual cellular chains.

**Inputs:** Oriented triangulation of a closedn-manifold; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AT-05.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Oriented triangulation of a closedn-manifold; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Pair an oriented simplex with its transverse dual block. |
| Sense | Closedness cancels all faces; orientability makes their signs globally compatible. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** The fundamental cycle and a basis pairing between simplicial cochains and dual cellular chains. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Compute the dual-chain differential

**Object, role, and local target:** Compare boundary flags for σ and its immediate cofaces. The required export is: A degree-reversing chain identification inducing H^k(K;Z)≅H_(n−k)(dualK;Z).

**Inputs:** Oriented dual blocks and incidence numbers[τ:σ]; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AT-05.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Oriented dual blocks and incidence numbers[τ:σ]; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Compare boundary flags for σ and its immediate cofaces. |
| Sense | Ignoring signs would only justify a mod2 statement, not integral duality. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** A degree-reversing chain identification inducing H^k(K;Z)≅H_(n−k)(dualK;Z). Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Identify the induced map with cap product

**Object, role, and local target:** Use local carriers to compare two chain constructions, not only abstract ranks. The required export is: The dual-cell isomorphism is the cap-product map [M] cap(−).

**Inputs:** Dual mapD and cap map againstc; prior exports E1/v1, E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AT-05.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Dual mapD and cap map againstc; prior exports E1/v1, E2/v1; keep their assumptions and versions attached. |
| Intellect | Use local carriers to compare two chain constructions, not only abstract ranks. |
| Sense | An abstract group isomorphism would not identify the specified canonical map. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** The dual-cell isomorphism is the cap-product map [M] cap(−). Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

### N4/v1 — Transfer to singular groups and close

**Object, role, and local target:** Apply the imported comparison maps compatibly. The required export is: Integral Poincaré duality with the specified fundamental-class cap map.

**Inputs:** Chain identification and cap comparison; prior exports E2/v1, E3/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AT-05.N4`; publish E4 only after the stated local target is established. |
| Memory | Retain Chain identification and cap comparison; prior exports E2/v1, E3/v1; keep their assumptions and versions attached. |
| Intellect | Apply the imported comparison maps compatibly. |
| Sense | The theorem is for closed oriented manifolds; boundary and nonorientability change the target coefficients or relative groups. |
| Action | Execute the numbered mathematical activities in §4.N4, including its displayed identities and logical implications. |

**Export E4/v1:** Integral Poincaré duality with the specified fundamental-class cap map. Evidence is the authored argument in §4.N4, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N4 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E4, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E4. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Fundamental cycle and dual blocks

1. Letc be the sum of compatibly orientedn-simplices.

2. Every(n−1)-face is shared twice with opposite induced signs, so∂c=0.

3. Its local coefficient at every oriented manifold point is+1, so it represents the integral fundamental class[M].

4. For an orientedk-simplexσ, its dual blockDσ is the union of barycentric flags beginning at σ and continuing through cofaces up to top-dimensional simplices.

5. It has dimensionn−k.

6. OrientDσ so the ordered orientation of σ followed by its transverse dual orientation gives the orientation ofM.

7. These blocks bijectively pair k-simplices with(n−k)-cells.

### §4.N2 — Compute the dual-chain differential

1. The codimension-one boundary faces ofDσ correspond to(k+1)-cofacesτ of σ and are copies ofDτ.

2. Other flag faces occur twice with opposite subdivision signs and cancel.

3. If[τ:σ] is the signed simplex incidence, moving the normal-to-σ direction across itsk tangent directions and using outward-first boundary orientation gives the coefficient(−1)^(k+1)[τ:σ].

4. Thus ∂Dσ=(−1)^(k+1)∑_{τ⊃σ}[τ:σ]Dτ.

5. For the cochain basisσ*, δσ*=∑[τ:σ]τ*.

6. Hence the degree-reversing basis mapD satisfies ∂Dα=(−1)^(k+1)Dδα.

7. It sends cocycles to cycles and coboundaries to boundaries, with an inverse on bases and the same differential relation.

### §4.N3 — Identify the induced map with cap product

1. View the reversed cochain complex as a chain complex with degree r=n−k and differential(−1)^(k+1)δ.

2. After mapping dual cellular chains to singular chains in the subdivision, bothD andC:α↦c capα are chain maps to singular chains.

3. For a basisσ* both images are supported in the closed star of σ: dual flags lie there, and every cap term comes from a top simplex containingσ.

4. The carrier is nested under the differential since cofaces have stars contained in that of σ.

5. In degree0, for a top-simplex cochain, the dual barycenter and cap-selected vertex have the same oriented augmentation.

6. Construct a chain homotopy upward on this free basis: if H is already defined one degree lower, z=(D−C)(σ*)−H(dσ*) is a cycle in starσ, with zero augmentation when it is a0-cycle.

7. The star is contractible, so this cycle bounds; choose its cone filling asH(σ*).

8. Inductively D−C=∂H+Hd.

9. Thus the two maps induce the same map on homology.

10. This is the explicit local-carrier comparison between dual blocks and the cap construction.

### §4.N4 — Transfer to singular groups and close

1. Simplicial cohomology ofK and cellular homology of its dual decomposition identify with the respective singular groups ofM.

2. These comparison maps commute with subdivision and cap products by the chain constructions used in node3.

3. Since D is an isomorphism on the reversed complexes, it is an isomorphism on their homology.

4. Since C induces the same map, cap product with[M] gives H^k(M;Z)→H_(n−k)(M;Z) as an isomorphism for every0≤k≤n.

5. Reversing orientation negates[M] and the resulting map but preserves its invertibility.

## 5. Worked instance and boundary audit

On an oriented torus, H⁰=Z pairs with the fundamental2-cycle, H²=Z pairs with a point class, andH¹=Z² pairs with the two complementary1-cycle directions. Using product orientation, the degree1 classes are exchanged with complementary cycles up to the cap convention’s signs. The dual-block proof supplies the isomorphism rather than only comparing these ranks.

**Boundary or failed-argument audit:**

For a disk, H⁰(D²;Z)=Z butH₂(D²;Z)=0, so the absolute closed-manifold formula fails. For a nonorientable closed manifold an untwisted integral fundamental class need not exist. Sense blocks the initial fundamental-cycle gate; relative or local-coefficient duality is a distinct theorem.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `AT-05`, version 1, and the proof with every reuse. Intermediate exports E1–E4 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

- [Allen Hatcher, Algebraic Topology: covering spaces, cellular homology, and cap products](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf).

[Branch index](../README.md)
